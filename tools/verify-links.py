#!/usr/bin/env python3
"""Verify every relative markdown link inside content/ resolves to a real file."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"

LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


def is_external(href: str) -> bool:
    return href.startswith(("http://", "https://", "mailto:"))


def main():
    errors = []
    checked = 0
    for md_file in sorted(CONTENT.rglob("*.md")):
        text = md_file.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(text):
            href = match.group(1).strip()
            if is_external(href) or href.startswith("#"):
                continue
            href = href.split("#")[0]
            if not href:
                continue
            checked += 1
            target = (md_file.parent / href).resolve()
            if not target.exists():
                errors.append(f"{md_file.relative_to(ROOT)} -> {href} (resolved: {target})")
        checked += 0

    print(f"Checked {checked} relative links across {len(list(CONTENT.rglob('*.md')))} files.")
    if errors:
        print(f"\n{len(errors)} BROKEN LINK(S):\n")
        for e in errors:
            print(" -", e)
        sys.exit(1)
    print("All relative links resolve.")


if __name__ == "__main__":
    main()
