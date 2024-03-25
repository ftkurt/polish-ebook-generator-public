# Book-Writer Project

## Overview
The Book-Writer project automates the creation, narration, and publication of digital books. Utilizing advanced text processing and cloud-based text-to-speech (TTS) technologies, this tool streamlines the conversion of text into engaging eBook formats and audio narrations.

## Features
- **Text Processing:** Clean and prepare texts for eBook creation and narration.
- **eBook Creation:** Generate ePub formats compatible with standard eBook readers.
- **Audio Narration:** Leverage cloud-based TTS services for high-quality, multilingual narrations.
- **Customization:** Offers voice modulation and supports multiple languages for a personalized narration experience.

## Dependencies
Ensure you have the following dependencies installed:
- `ebooklib`
- `lxml`
- `six`
- `boto3`
- `spacy`
- `pandas`
- `google-cloud-texttospeech`
- `pydub`
- `mutagen`

You can install these dependencies via pip:
```bash
pip install ebooklib lxml six boto3 spacy pandas google-cloud-texttospeech pydub mutagen
```
Additionally, for `spacy` language models, run:
```bash
python -m spacy download <language_model>
```
Replace `<language_model>` with the specific model you need, e.g., `pl_core_news_sm`.

## Setup
1. **Environment Variables:** Set up your environment variables to include your cloud service credentials. For Google Cloud TTS, set `GOOGLE_APPLICATION_CREDENTIALS` to your JSON credentials file path.

2. **AWS and GCP Configuration:** Ensure your AWS and GCP accounts are properly configured to use their respective services, such as S3 for storage and Google Cloud TTS for narration.

## Usage
To use the Book-Writer, follow these steps:
1. Prepare your text input according to the guidelines provided in the script.
2. Execute the script, specifying any necessary arguments or configurations.
3. The script will process the text, create an eBook, and generate an audio narration.

## Customization
The script allows for various customizations, including voice type and pitch adjustments for audio narrations. Review the script's parameters for detailed customization options.

## Contributing
Contributions to the Book-Writer project are welcome. Please ensure you follow the project's code of conduct and contribution guidelines.
