import { readFile, writeFile } from 'fs/promises';

async function trimFileContent() {
    const args = process.argv.slice(2);
    const inputPath = args[0];
    const outputPath = args[1];
    const charsToRemoveStart = parseInt(args[2], 10);
    const charsToRemoveEnd = parseInt(args[3], 10);

    const fileContent = await readFile(inputPath, { encoding: 'utf-8' });
    let modifiedContent = fileContent;

    const lines = fileContent.split('\n');
    const trimmedLines = lines.map(line => {
        line = line.slice(charsToRemoveStart, charsToRemoveEnd);
        let parts = line.split(",");
        line = '    { "ccaa": "'+parts[0]+'", "centil_hijo_loess": '+parts[1]+' },';
        return line;
    });
    
    modifiedContent = trimmedLines.join('\n');
    await writeFile(outputPath, modifiedContent, { encoding: 'utf-8' });
}

trimFileContent();