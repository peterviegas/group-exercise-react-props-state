// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>
interface ChuckJokeProps {
	id: number
	joke: string;
}

//function ChuckJoke(id:number,joke:string): React.ReactNode {
const ChuckJoke : React.FC<ChuckJokeProps> = ({joke}) => {

	return (
		<p>{joke}</p>
	)
}

export default ChuckJoke;