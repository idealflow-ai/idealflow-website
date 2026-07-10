#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

COMMIT_MSG="${1:-更新網站內容}"

echo "==> Git commit & push（Zeabur 會自動偵測並重新部署）"
git add -A
if git diff --cached --quiet; then
  echo "沒有變更需要 commit，略過"
else
  git commit -m "$COMMIT_MSG"
  git push
fi

echo "==> 完成！Zeabur 將於數十秒內自動部署新版本"
