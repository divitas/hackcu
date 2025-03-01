import os
from src.AIAssitant import logger
from haystack.utils import fetch_archive_from_http
from haystack.nodes import TextConverter, PDFToTextConverter, DocxToTextConverter, PreProcessor
from haystack.utils import convert_files_to_docs
from haystack.nodes import PreProcessor
from pathlib import Path
data_dir = Path("artifacts/raw_data")
files = [file for file in data_dir.iterdir() if file.is_file()]


for file_path in files:
    if file_path.suffix == ".txt":
        converter = TextConverter(remove_numeric_tables=True, valid_languages=["en"])
        doc_txt = converter.convert(file_path=file_path, meta=None)[0]
    elif file_path.suffix == ".pdf":
        converter = PDFToTextConverter(remove_numeric_tables=True, valid_languages=["en"])
        doc_pdf = converter.convert(file_path=file_path, meta=None)[0]
    elif file_path.suffix == ".docx":
        converter = DocxToTextConverter(remove_numeric_tables=False, valid_languages=["en"])
        doc_docx = converter.convert(file_path=file_path, meta=None)[0]
    else:
        raise ValueError(f"Invalid file type. We only support .txt, .pdf, .docx for now.")