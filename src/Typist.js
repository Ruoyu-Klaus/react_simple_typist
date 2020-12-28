import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Component,
} from 'react';
import PropTypes from 'prop-types';
import './Typist.css';

function Typist(props) {
  const { paragraph, speed = 200 } = props;

  const [renderList, setRenderList] = useState({});
  const lineIndex = useRef(0);

  useEffect(() => {
    setRenderList({});
    if (lineIndex.current === paragraph.length) {
      lineIndex.current = 0;
    }
    lineIndex.current < paragraph.length && generateContent(paragraph);
  }, [paragraph]);

  const underScore = () => {
    return <div className='console-underscore'>&#95;</div>;
  };

  const generateContent = useCallback(
    paragraph => {
      let wordCount = 1;
      let currentIndex = lineIndex.current;

      if (lineIndex.current < paragraph.length) {
        const timer = setInterval(() => {
          const typeCharacters = paragraph[currentIndex].data.substring(
            0,
            wordCount
          );
          setRenderList(renderList => {
            return {
              ...renderList,
              [currentIndex]: { typeCharacters, ...paragraph[currentIndex] },
            };
          });
          wordCount++;
          if (wordCount > paragraph[currentIndex].data.length) {
            clearInterval(timer);
            setTimeout(() => {
              lineIndex.current = currentIndex + 1;
              lineIndex.current < paragraph.length &&
                generateContent(paragraph);
            }, paragraph[currentIndex].delay || 0);
          }
        }, speed);
      }
      return;
    },
    [paragraph, lineIndex]
  );

  const getAppendix = useCallback(
    i => {
      const appendix = underScore();
      if (i === lineIndex.current + '') {
        return appendix;
      }
      return null;
    },
    [underScore]
  );

  return (
    <Component>
      {Object.entries(renderList).map(([lineIndex, lineContent]) => {
        console.log(lineContent);
        return (
          <div
            className={`console-container ${lineIndex}`}
            style={{
              fontSize: `${lineContent.fontSize}px`,
              color: `${lineContent.fontColor}`,
            }}
            key={lineContent.typeCharacters}
          >
            {lineContent.typeCharacters}
            {getAppendix(lineIndex)}
          </div>
        );
      })}
    </Component>
  );
}

Typist.propTypes = {
  paragraph: PropTypes.array.isRequired,
  speed: PropTypes.number,
};

Typist.defaultProps = {
  paragraph: [
    {
      data: 'Hello, I am react typist.',
      fontSize: 60,
      fontColor: '#eee',
      delay: 1000,
    },
    {
      data: 'what can I do for you?',
      fontSize: 40,
      fontColor: 'pink',
      delay: 3000,
    },
    {
      data: 'aha?',
      fontSize: 40,
      fontColor: 'pink',
      delay: 5000,
    },
    {
      data: 'You are really like waiting for something man !',
      fontSize: 40,
      fontColor: 'red',
      delay: 0,
    },
  ],
};

export default Typist;
