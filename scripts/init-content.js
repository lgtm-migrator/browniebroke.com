#!/usr/bin/env node

const fs = require('fs')
const slugify = require('slugify')
const usage = `usage: init-content.js [til|post] '<title>'`

const scriptArgs = process.argv.slice(2)
if (scriptArgs.length < 2) {
  console.error(`Missing argument - ${usage}`)
  process.exit(1)
}

switch (scriptArgs[0]) {
  case 'til':
    console.log('Initiating TIL...')
    initTIL(scriptArgs[1])
    break
  case 'post':
    console.log('Initiating Post...')
    initPost(scriptArgs[1])
    break
  default:
    console.error(`Unknown action - ${usage}`)
    process.exit(2)
}

function getDateStr() {
  const now = new Date()
  return now.toISOString().split('T')[0]
}

function initTIL(title) {
  const dateStr = getDateStr()
  const slug = slugify(title.toLowerCase())
  const data = `---
date: ${dateStr}
title: '${title}'
---
`
  fs.writeFileSync(`src/tils/${dateStr}-${slug}.md`, data, { flag: 'w' })
}

function initPost(title) {
  const dateStr = getDateStr()
  const slug = slugify(title.toLowerCase())
  const data = `---
date: ${dateStr}
author: browniebroke
title: '${title}'
description: ''
header_image: header.png
tags:
  - cake
---
`
  const dir = `src/posts/${dateStr}-${slug}`
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(`${dir}/index.md`, data, { flag: 'w' })
}
