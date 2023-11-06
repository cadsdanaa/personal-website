import React from 'react'
import Draggable from 'react-draggable'
import './Games.css'

const grid = [
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

export function GitMan (props: any): JSX.Element {
  const initialGrid = [...grid]
  const [game, setGame] = React.useState(initialGrid)

  return <Draggable axis="both">
        <div className={'Popup'}>
            <div>
                <div className={'PopupNavbar'}>
                    <span onClick={closePopup}>&nbsp;X</span>
                </div>
            </div>
            {generateBoard(game)}
        </div>
    </Draggable>

  function closePopup (): void {
    setGame(initialGrid)
    props.showGitMan(false)
  }

  function generateBoard (grid: string[][]): JSX.Element {
    return <div>
        {grid.map(gridRow => {
          return <div>
                <span>
                    &nbsp;
                    {
                        gridRow.map(element => {
                          return element
                        })
                    }
                </span>
                <br/>
            </div>
        })}
        </div>
  }
}
