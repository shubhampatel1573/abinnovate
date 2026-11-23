import re

files = [
    'src/pages/Contact.jsx',
    'src/pages/About.jsx',
    'src/pages/Home.jsx',
    'src/pages/Services.jsx',
    'src/pages/Work.jsx',
    'src/components/Navbar.jsx',
    'src/components/Footer.jsx',
    'src/data/content.js',
    'src/App.jsx',
]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        # Find all single-quoted strings that contain apostrophes and convert to double quotes
        # Strategy: replace any single-quoted string containing an apostrophe with double-quoted version
        # Simple approach: replace known problematic strings
        replacements = [
            ("'We'll review your message within 24 hours'", '"We will review your message within 24 hours"'),
            ("'We'll", '"We\'ll'),
            ("isn't", "isn\\'t"),
        ]
        
        # Better approach: use regex to find single-quoted JS strings with internal apostrophes
        # Pattern: ' ... ' ... ' where there's an apostrophe inside
        # We'll do a targeted line-by-line fix
        
        lines = content.split('\n')
        new_lines = []
        changed = False
        for line in lines:
            new_line = line
            # If a line has a single-quoted string with an apostrophe inside, switch to double quotes
            # Simple heuristic: count single quotes. If odd count in a string context, there's a problem
            if "isn't" in line or "We'll" in line or "we're" in line or "that's" in line or "it's" in line or "don't" in line or "won't" in line or "I'm" in line or "you're" in line or "they're" in line:
                # Replace outer single quotes of string literals containing apostrophes
                # Pattern: 'text with apostrophe' -> "text with apostrophe"
                # This regex matches a single-quoted string containing an apostrophe
                new_line = re.sub(r"'([^']*(?:isn't|We'll|we're|that's|it's|don't|won't|I'm|you're|they're|we'll|doesn't)[^']*)'", 
                                   lambda m: '"' + m.group(1) + '"', line)
                if new_line != line:
                    changed = True
                    print(f"  Fixed in {f}: {line.strip()[:60]}")
            new_lines.append(new_line)
        
        if changed:
            with open(f, 'w', encoding='utf-8') as fh:
                fh.write('\n'.join(new_lines))
            print(f"Saved {f}")
    except FileNotFoundError:
        pass

print("All done")
