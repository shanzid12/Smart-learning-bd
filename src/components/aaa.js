import React, { useEffect, useState } from 'react';

// cannot directly export arrow function
export default function TestComponent(props) {
	const [state1, setState1] = useState(props.prop1);

	// useEffect call cannot be async
	useEffect(() => {
		callTestFunction()
			.then((output) => {
				setState1(output);
			})
			.catch((err) => console.error(err));
	}, []);

	return <div></div>;
}
