import React from "react";
import {ApolloClient, InMemoryCache, gql,  useQuery, ApolloProvider} from "@apollo/client";

// Client - NOT URL, rather URI (i)
const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io/",
    cache: new InMemoryCache()
});

// Describing our query using GPL
const EXCHANGE_RATES = gql`
    query GetExchangeRates{
        rates(currency: "HRK"){
            currency
            rate
        }
    }


`;

// Function that will process our data
function ExchangeRates(){
    const {loading, error, data} = useQuery(EXCHANGE_RATES);

    if(loading) return <p>Loading the currencies...</p>;
    if(error) return <p>An error has occured!</p>

    return data.rates.map(({currency, rate}) => 
        <div kewy={currency}>
            {currency}: {rate}
        </div>
    );
}

export default function GraphQL(){
    return(
        <div>
            <ApolloProvider client={client}>
                <ExchangeRates />
            </ApolloProvider>
        </div>
    );
}