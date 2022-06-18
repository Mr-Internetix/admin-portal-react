import React from "react";

import { Link } from "react-router-dom";
import {
	Button,
	Text,
	Box,
	Spacer,
	Flex,
	Image,
	Circle,
	Stack,
	Center,
} from "@chakra-ui/react";

import { ExternalLinkIcon, ArrowLeftIcon, PhoneIcon } from "@chakra-ui/icons";

export default function DashboardNav({details}) {
	return (
		<Box bg="#F4F6F6" width="100vw" height="3.4rem">
			<Flex align="center" justify="center" align="center">
				<Text> Dashboard  </Text>
				<Text> Welcome{details.username}  </Text>
				<Spacer />
				<Box mr={3}>
					<Button
						size="sm"
						colorScheme="teal"
						mr="1rem"
						variant="outline"
						leftIcon={<ArrowLeftIcon />}
					>
						<Link to="/"> Home </Link>
					</Button>
					<Button
						size="sm"
						colorScheme="teal"
						variant="outline"
						leftIcon={<ExternalLinkIcon />}
					>
						<Link to="/"> Logout </Link>
					</Button>
				</Box>
			</Flex>
		</Box>
	);
}
