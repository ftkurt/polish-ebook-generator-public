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

## Managing Known Words and Translation Samples

### Known Words (`known_words.json`)
The `known_words.json` file functions as a dictionary, identifying words that will not require translation in the generated books. This approach ensures a streamlined reading experience by excluding terms that are either common knowledge or do not have a direct translation impact.

- **Format:** This is a JSON dictionary file, where each entry specifies a word recognized as not needing translation.
- **Updating:** Users are encouraged to periodically review and update the `known_words.json` file. This review helps in refining the list with new terms that should be exempt from translation efforts.

### Translation Samples (`samples.csv`)
Translations are primarily managed through the `samples.csv` file, where the first two columns are critical for operation. The first column lists the words to be translated, and the second column provides their corresponding translations.

- **Purpose:** This file is instrumental in enhancing the translation quality of the generated books by providing a direct reference for translating words not listed in the `known_words.json` file.
- **Format:** The `samples.csv` file is structured with at least two important columns: the word requiring translation (Column 1) and its translation (Column 2).
- **Updating:** Regular updates to the `samples.csv` file are essential for incorporating new words and their translations, thereby improving the overall translation quality in future projects.

### Listing Words That Need Translation
After a book is generated, it is possible to list words that have not been translated. This feature aids in identifying gaps in the Known Words and Samples files:

- **Process:** The software will generate a list of untranslated words post-creation of a book.
- **Action:** Users should review this list, determining whether to add these words to the Known Words file (if translation is unnecessary) or to the Samples file with an appropriate translation for future use.

### Contribution
Contributions to the Known Words and Samples files are highly appreciated as they directly contribute to the improvement of the project. Users are encouraged to share updates or enhancements to these files, fostering a collaborative and ever-improving tool.
