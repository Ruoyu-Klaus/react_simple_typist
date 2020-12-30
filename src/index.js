import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

function TypeText(props) {
  const { paragraph, speed = 200 } = props

  const [renderList, setRenderList] = useState({})
  const lineIndex = useRef(0)

  useEffect(() => {
    setRenderList({})
    if (lineIndex.current === paragraph.length) {
      lineIndex.current = 0
    }
    lineIndex.current < paragraph.length && generateContent(paragraph)
  }, [paragraph])

  const underScore = () => {
    return <div className={styles._underscore}>&#95;</div>
  }

  const generateContent = useCallback(
    (paragraph) => {
      let wordCount = 1
      let currentIndex = lineIndex.current

      if (lineIndex.current < paragraph.length) {
        const timer = setInterval(() => {
          const typeCharacters = paragraph[currentIndex].data.substring(
            0,
            wordCount
          )
          setRenderList((renderList) => {
            return {
              ...renderList,
              [currentIndex]: { typeCharacters, ...paragraph[currentIndex] }
            }
          })
          wordCount++
          if (wordCount > paragraph[currentIndex].data.length) {
            clearInterval(timer)
            setTimeout(() => {
              lineIndex.current = currentIndex + 1
              lineIndex.current < paragraph.length && generateContent(paragraph)
            }, paragraph[currentIndex]?.delay || 0)
          }
        }, speed)
      }
      return
    },
    [paragraph, lineIndex]
  )

  const getAppendix = useCallback(
    (i) => {
      const appendix = underScore()
      if (i === lineIndex.current + '') {
        return appendix
      }
      return null
    },
    [underScore]
  )

  return (
    <div className={styles.container}>
      {Object.entries(renderList).map(([lineIndex, lineContent]) => {
        return (
          <div
            className={styles.line + ' ' + lineIndex}
            style={{
              fontSize: `${lineContent.fontSize}px`,
              color: `${lineContent.fontColor}`
            }}
            key={lineContent.typeCharacters}
          >
            {lineContent.typeCharacters}
            {getAppendix(lineIndex)}
          </div>
        )
      })}
    </div>
  )
}

TypeText.propTypes = {
  paragraph: PropTypes.array.isRequired,
  speed: PropTypes.number
}

TypeText.defaultProps = {
  paragraph: [
    {
      data: 'Hello :)',
      fontSize: 60,
      fontColor: '#eee',
      delay: 1000
    },
    {
      data: 'I am a simple typist as a React Component.',
      fontSize: 40,
      fontColor: '#eee',
      delay: 1000
    },
    {
      data: 'What can I do for you? ',
      fontSize: 40,
      fontColor: 'pink',
      delay: 3000
    },
    {
      data: 'Come on, try and play around with it.',
      fontSize: 40,
      fontColor: 'green',
      delay: 5000
    },
    {
      data: 'Sick! You really like to waste you time man !',
      fontSize: 40,
      fontColor: 'red',
      delay: 60000
    },
    {
      data: 'Bye ~~',
      fontSize: 30,
      fontColor: 'yellow',
      delay: 0
    }
  ],
  speed: 150
}

export default TypeText
