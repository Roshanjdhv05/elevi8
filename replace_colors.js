import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace text colors
    content = content.replace(/\btext-white\b/g, 'text-navy');
    content = content.replace(/\btext-gray-300\b/g, 'text-gray-700');
    content = content.replace(/\btext-gray-400\b/g, 'text-gray-600');
    
    // Replace bg colors
    content = content.replace(/\bbg-navy\b/g, 'bg-white');
    content = content.replace(/\bbg-navy-light\b/g, 'bg-gray-100');
    content = content.replace(/\bbg-navy-dark\b/g, 'bg-gray-200');
    
    // Replace border colors
    content = content.replace(/\bborder-white\/10\b/g, 'border-gray-200');
    content = content.replace(/\bborder-white\/5\b/g, 'border-gray-200');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
