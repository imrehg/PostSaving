# Create zip but not in the same dir of the source
FILENAME=PostSaving.zip
rm ${FILENAME}
cd src
zip -r ../${FILENAME} *
cd ..
