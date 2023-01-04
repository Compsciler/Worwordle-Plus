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
          Guess the combined 8-letter word in 6 tries. After each guess, the color of the tiles will
          change to show how close your guess was to the word.
        </p>
        <br />
        <p className="text-sm text-gray-500 dark:text-gray-300">
          All words and guesses are the result of merging two 5-letter words together,
          where the last two letters of the first word match the first two letters of the second word.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          For example, the word GECKOALA is the word GECKO merged with the word KOALA.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="F"
            status="correct"
          />
          <Cell value="I" />
          <Cell value="S" />
          <Cell value="H" />
          <Cell value="Y" />
          <Cell value="E" />
          <Cell value="N" />
          <Cell value="A" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter F is in the word and in the correct spot.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="S" />
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="P"
            status="present"
          />
          <Cell value="I" />
          <Cell value="L" />
          <Cell value="L" />
          <Cell value="A" />
          <Cell value="M" />
          <Cell value="A" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter P is in the word but in the wrong spot.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="L" />
          <Cell value="A" />
          <Cell value="R" />
          <Cell isRevealing={true} isCompleted={true} value="V" status="absent" />
          <Cell value="A" />
          <Cell value="G" />
          <Cell value="U" />
          <Cell value="E" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          The letter V is not in the word in any spot.
        </p>

        <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          This is an open source version of the word guessing game we all know and
          love -{' '}
          <a
            href="https://github.com/Compsciler/Worwordle"
            className="underline font-bold"
          >
            check out the code here
          </a>{' '}
        </p>
      </div>
    </BaseModal>
  )
}
