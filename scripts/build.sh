#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
npm --prefix "$ROOT_DIR/client-web" install
npm --prefix "$ROOT_DIR/client-web" run build
