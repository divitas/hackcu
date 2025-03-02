import os
from pathlib import Path
import logging

logging.basicConfig(level=logging.INFO, format='[%(asctime)s]: %(message)s:')

project_name = "AIAssistant"

list_of_files = [
    ".github/workflows/.gitkeep",  # GitHub Actions placeholder
    f"src/{project_name}/__init__.py",
    f"src/{project_name}/components/__init__.py",
    f"src/{project_name}/utils/__init__.py",
    f"src/{project_name}/config/configuration.py",
    f"src/{project_name}/config/__init__.py",
    f"src/{project_name}/pipeline/__init__.py",
    f"src/{project_name}/entity/__init__.py",
    f"src/{project_name}/constants/__init__.py",
    "config/config.yaml",  # Configuration file
    "params.yaml",  # Model hyperparameters
    "requirements.txt",  # Dependencies
    "setup.py",  # Project setup file
    "main.py",  # Main script
]
for filepath in list_of_files:
    filepath = Path(filepath)
    filedir,filename = os.path.split(filepath)

    if filedir != "":
        logging.info(f"Creating directory {filedir} for the file {filename}")
        os.makedirs(filedir,exist_ok=True)
        logging.info(f"Directory Created")

    if (not os.path.exists(filepath)) or (os.path.getsize(filepath)==0):
        with open(filepath,"w") as f:
            logging.info(f"Creating empty file {filepath}")
            pass
    else:
        logging.info(f"{filename} already exist")
            