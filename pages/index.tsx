import type { NextPage } from 'next';
import { Card } from '../components/Card/Card';
import { Hand } from '../components/Hand/Hand';
import { Player } from '../components/Player/Player';
import { Suits } from '../libs/Card';

const Home: NextPage = () => {
  const hand = [
    { suit: Suits.Bugfix, value: 1 },
    { suit: Suits.Bugfix, value: 2 },
    { suit: Suits.Eye, value: 3 },
    { suit: Suits.Bugfix, value: 4 },
    { suit: Suits.Swap, value: 5 },
  ]
  return (
    <div className='pole'>
      <Hand hand={hand} />
      <Hand hand={hand} />
      <Player />
    </div>
  )
}

export default Home;
