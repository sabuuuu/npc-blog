import { GraphQLClient, gql } from 'graphql-request';
import { NextResponse } from 'next/server';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export async function POST(req) {
    try {
        const graphQLClient = new GraphQLClient((graphqlAPI), {
            headers: {
              authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
            },
          });
        
          const query = gql`
            mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
              createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
            }
          `;
        
          const result = await graphQLClient.request(query, {
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            slug: req.body.slug,
          });
        
          return res.status(200).send(result);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to submit comment' }, { status: 500 });
    }
  }