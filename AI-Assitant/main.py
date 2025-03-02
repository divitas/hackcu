import sys
import os
import json
import numpy as np
import atexit
from collections import defaultdict
from flask import Flask, jsonify

# Get the root directory of the project
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
sys.path.append(ROOT_DIR)

# Import the function from your pipeline
from src.AIAssistant.pipeline.mcq_generation import generate_mcq

app = Flask(__name__)

# Define the file path
FILE_PATH = "artifacts/processed_data/generated_questions_answers.json"

def convert_to_serializable(obj):
    """
    Helper function to convert non-serializable objects (e.g., numpy arrays, sets) into JSON-friendly types.
    """
    if isinstance(obj, np.ndarray):
        return obj.tolist()  # Convert NumPy arrays to lists
    elif isinstance(obj, set):
        return list(obj)  # Convert sets to lists
    elif isinstance(obj, defaultdict):
        return {k: convert_to_serializable(v) for k, v in obj.items()}  # Recursively convert defaultdict
    elif isinstance(obj, dict):
        return {k: convert_to_serializable(v) for k, v in obj.items()}  # Recursively convert dict
    elif isinstance(obj, list):
        return [convert_to_serializable(v) for v in obj]  # Convert lists
    return obj  # Return other data types as-is

@app.route('/result', methods=['GET'])
def get_mcq():
    """
    API endpoint to generate MCQs using the predefined pipeline.
    """
    try:
        if not os.path.exists(FILE_PATH):
            generate_mcq()  # Call the actual function
        with open(FILE_PATH, "r") as f:
            mcq_output = json.load(f)

        return mcq_output  # Return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return error if something goes wrong

def cleanup():
    """ Delete the file when the session ends. """
    if os.path.exists(FILE_PATH):
        os.remove(FILE_PATH)
        print(f"Deleted {FILE_PATH} on session exit.")

# Register cleanup function to run when Flask shuts down
atexit.register(cleanup)

if __name__ == '__main__':
    app.run(debug=True)