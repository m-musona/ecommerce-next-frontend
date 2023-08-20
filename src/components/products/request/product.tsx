"use client";

import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

interface ProductCompProps {
    api_endpoint: string;
}

export default function ProductComponent (props: ProductCompProps) {
const api_route: string = `http://127.0.0.1:8000/api/${props.api_endpoint}`;
return (
    <QueryClientProvider client={queryClient}>
      <ProductPage api_route={api_route} />
    </QueryClientProvider>
  );
}

interface ProductPageProps {
	api_route: string;
}
function ProductPage(props: ProductPageProps) {
	const { isLoading, error, data }: any = useQuery("repoData", () =>
		fetch(props.api_route).then((res) => res.json())
	);

	if (isLoading)
		return (
			<div>
				<div>....Loaading</div>
			</div>
		);

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			<div>
				{data.title}
			</div>
		</div>
	);
}

