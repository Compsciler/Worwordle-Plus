import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose} isWide={true}>
      <div className="md:max-w-3xl sm:max-w-lg">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Play the <a
            href="http://worwordle.herokuapp.com/"
            className="underline font-bold"
          >
            original Worwordle
          </a>{' '}
          first if you haven't already!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Guess the combined 7-letter word in 6 tries. After each guess, the color of the tiles will
          change to show how close your guess was to the word.
        </p>
        <br />
        <p className="text-sm text-gray-500 dark:text-gray-300">
          All words and guesses are the result of merging two 5-letter words together,
          where the last three letters of the first word match the first three letters of the second word.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          For example, the word SIRENEW is the word SIREN merged with the word RENEW.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="D"
            status="correct"
          />
          <Cell value="I" />
          <Cell value="V" />
          <Cell value="E" />
          <Cell value="R" />
          <Cell value="S" />
          <Cell value="E" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter D is in the word and in the correct spot.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="A" />
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="R"
            status="present"
          />
          <Cell value="S" />
          <Cell value="O" />
          <Cell value="N" />
          <Cell value="I" />
          <Cell value="C" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter R is in the word but in the wrong spot.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="E" />
          <Cell value="X" />
          <Cell value="T" />
          <Cell value="R" />
          <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
          <Cell value="C" />
          <Cell value="E" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter A is not in the word in any spot.
        </p>

        <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          This is an open source version of the word guessing game we all know and
          love -{' '}
          <a
            href="https://github.com/Compsciler/Worwordle-Plus"
            className="underline font-bold"
          >
            check out the code here
          </a>{' '}
        </p>
      </div>
    </BaseModal>
  )
}
