#!/bin/zsh

# Define directories
MARKDOWN_DIR="."
HTML_DIR="../html"
TEMPLATE_FILE="../html/template.html"
LUA_FILTER="numbering.lua"

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Pandoc is not installed. Please install Pandoc to use this script."
    exit 1
fi

# Ensure HTML directory exists
mkdir -p $HTML_DIR

# Convert all markdown files to HTML
for file in $MARKDOWN_DIR/*.md; do
    filename=$(basename -- "$file")
    filename="${filename%.*}"
    pandoc -s "$MARKDOWN_DIR/$filename.md" -o "$HTML_DIR/$filename.html" --template=$TEMPLATE_FILE --toc --section-divs --number-sections
done

echo "Conversion complete!"

