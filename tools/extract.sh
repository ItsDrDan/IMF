#!/bin/bash
# usage: extract.sh <html> -> writes logic.js and ui.js next to this script
D="$(cd "$(dirname "$0")" && pwd)"
awk '/\/\*LOGIC-START\*\//{f=1} f{print} /\/\*LOGIC-END\*\//{f=0}' "$1" > "$D/logic.js"
awk '/^<script>$/{n++; next} /^<\/script>/{if(n==2)exit} n==2{print}' "$1" > "$D/ui.js"
