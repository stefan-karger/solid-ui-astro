#!/usr/bin/env sh

set -e

OPENCODE_EXPERIMENTAL_PLAN_MODE=false opencode run \
  "follow plans/prompt.md exactly" \
  -m openai/gpt-5.3-codex \
  --variant high \
  -f plans/prd.json \
  -f progress.txt \
  -f plans/rules.md \
  -f plans/prompt.md
