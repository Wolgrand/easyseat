import styled from 'styled-components';

export const Container = styled.div`

  margin: 15px 30px;
  


`;

export const Event = styled.div`
background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px 0 auto;
	overflow: hidden;
	width: 100%;



`;

export const EventPreview = styled.div`
background-color: #2A265F;
	color: #fff;
	padding: 30px;
	max-width: 250px;
  flex-direction: row;

 
`;

export const EventPreviewData = styled.div`
flex-direction: column;
 p {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
  color: #6666
}

h2 {
	letter-spacing: 1px;
	margin: 10px 0;
  font-size: 2rem;
  color: var(--white);
}

h1 {
	letter-spacing: 1px;
	margin: 10px 0;
  color: var(--white);
  font-size: 600;
}`;

export const EventPreviewInfo = styled.div`
flex-direction:row;
margin: 0 auto;
`;

export const EventInfo = styled.div`
padding: 30px;
	position: relative;
	width: 100%;

  .event h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.event h1 {
	letter-spacing: 1px;
	margin: 10px 0;
  font-size: 1.5rem;
}
`;

export const ProgressContainer = styled.div`

position: absolute;
	top: 30px;
	right: 30px;
	text-align: right;
	width: 150px;

  .progress {
	background-color: #ddd;
	border-radius: 3px;
	height: 5px;
	width: 100%;
}

.progress::after {
	border-radius: 3px;
	background-color: #2A265F;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 5px;
	width: 66%;
}

.progress-text {
	font-size: 10px;
	opacity: 0.6;
	letter-spacing: 1px;
}

`;


