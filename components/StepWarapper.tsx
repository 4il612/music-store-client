import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

interface SWProps {
	activeStep: number;
	children: React.ReactNode;
}

const steps = ["Track info", "Track preview", "Track audio"];

const StepWrapper: React.FC<SWProps> = ({ activeStep, children }) => {
	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => (
					<Step key={index} completed={activeStep > index}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Grid
				container
				justifyContent="center"
				style={{ margin: "70px 0", height: 270 }}
			>
				<Card style={{ width: 600 }}>{children}</Card>
			</Grid>
		</Container>
	);
};

export default StepWrapper;
