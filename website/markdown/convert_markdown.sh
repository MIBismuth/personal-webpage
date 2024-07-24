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
    html_file="$HTML_DIR/$filename.html"
    
    # Check if HTML file needs to be updated
    if [ ! -f "$html_file" ] || [ "$file" -nt "$html_file" ] || [ "$TEMPLATE_FILE" -nt "$html_file" ]; then
        echo "Converting $file to HTML"

        # Check for a meta tag to determine whether to use --number-sections
        number_sections="false"
        if grep -q "^numbering: true" "$file"; then
            number_sections="true"
        fi

        # Build pandoc command
        pandoc_cmd="pandoc -s \"$MARKDOWN_DIR/$filename.md\" -o \"$html_file\" --template=$TEMPLATE_FILE --toc --section-divs"
        
        if [ "$number_sections" = "true" ]; then
            pandoc_cmd="$pandoc_cmd --number-sections"
        fi

        # Execute pandoc command
        eval $pandoc_cmd
    else
        echo "No changes in $file or template, skipping conversion"
    fi
done

echo "Conversion complete!"

