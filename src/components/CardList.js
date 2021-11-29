import Card from './Card'
 
const CardList = ({ robots }) => {
	if (false) { // switch to true to test ErrorBoundary - equivalent of Try Catch in Python 
		throw new Error('Failed!')
	}
	return (
		<div>
		{
			robots.map((user, ind) => {
				return (
					<Card 
						key={ind} 
						id={robots[ind].id} 
						name={robots[ind].name} 
						email={robots[ind].email}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;