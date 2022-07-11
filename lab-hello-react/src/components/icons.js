function Icons({ image,title,definition }) {
	return (
		<div>
			<img src={image} alt="icon" />
			<h2> {title}</h2>
			<p >
				{definition}
			</p>
		</div>
	);
}

export default Icons;