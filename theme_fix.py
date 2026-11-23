"""
Replace blue (#477BFF) accent with white/monochrome theme across all source files.
"""
import re, os

ROOT = r"c:\Users\Admin\Desktop\AB Innovate\src"

files = []
for dirpath, _, filenames in os.walk(ROOT):
    for f in filenames:
        if f.endswith(('.jsx', '.js', '.css')):
            files.append(os.path.join(dirpath, f))

# Also include tailwind config and index.html
files += [
    r"c:\Users\Admin\Desktop\AB Innovate\tailwind.config.js",
    r"c:\Users\Admin\Desktop\AB Innovate\index.html",
]

REPLACEMENTS = [
    # Blue text color → white
    ("#477BFF", "#FFFFFF"),
    # Partial opacity blues (for borders/backgrounds) → white equivalents
    ("#477BFF18", "rgba(255,255,255,0.05)"),
    ("#477BFF22", "rgba(255,255,255,0.07)"),
    ("#477BFF25", "rgba(255,255,255,0.08)"),
    ("#477BFF30", "rgba(255,255,255,0.12)"),
    ("#477BFF44", "rgba(255,255,255,0.15)"),
    ("#477BFF14", "rgba(255,255,255,0.04)"),
    ("#477BFF20", "rgba(255,255,255,0.07)"),
    ("#477BFF15", "rgba(255,255,255,0.05)"),
    ("#477BFF09", "rgba(255,255,255,0.04)"),
    ("#477BFF08", "rgba(255,255,255,0.03)"),
    ("#477BFF07", "rgba(255,255,255,0.03)"),
]

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        original = content
        # Apply partial opacity replacements FIRST (longer strings first)
        for old, new in REPLACEMENTS[1:]:
            content = content.replace(old, new)
        # Then plain color
        content = content.replace(REPLACEMENTS[0][0], REPLACEMENTS[0][1])
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f"Updated: {os.path.basename(filepath)}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

print("Done.")
