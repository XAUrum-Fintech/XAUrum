---
name: no_claude_coauthor
description: User does not want Co-Authored-By Claude attribution in commit messages
type: feedback
---

Do not include `Co-Authored-By: Claude` lines in commit messages.

**Why:** User explicitly rejected a commit that included the Claude co-author line.

**How to apply:** When creating git commits, omit the Co-Authored-By footer entirely.
