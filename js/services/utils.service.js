'use strict'

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function getDeepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function getPageNumsHtmlStr(currPageIdx, numOfPages, goToFunc) {
    var pageStr = ''
    if (numOfPages <= 1) return pageStr
    const firstPage = `<button class="page-index clickable" onclick="${goToFunc}(0)"><<</button>`
    const lastPage = `<button class="page-index clickable" onclick="${goToFunc}(${numOfPages-1})">>></button>`
    var i = currPageIdx > 0 ? currPageIdx - 1 : 0
    if (i > 0 && numOfPages >= 3) pageStr += firstPage
    for (i; i <= currPageIdx + 1 && i < numOfPages; i++) {
        if (i === currPageIdx) pageStr += `<button class="page-index curr-page">${i + 1}</button>`
        else pageStr += `<button class="page-index clickable" onclick="${goToFunc}(${i})">${i + 1}</button>`
    }
    if (i < numOfPages && numOfPages >= 3) pageStr += lastPage
    return pageStr
}
