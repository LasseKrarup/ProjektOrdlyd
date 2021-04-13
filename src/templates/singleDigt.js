import React from 'react';
import Digt from '../components/digt';
import DigtLayout from '../components/digtlayout';
import SEO from '../components/seo';

import { graphql } from "gatsby"


const SingleDigt = () => (
    <DigtLayout>
            <SEO title="(ingen titel)"></SEO>


            <Digt className="ml-20" digter="Ditte Boe Sørensen" musiker="Lasse Krarup" nolink>(ingen titel)</Digt>

            <div className="flex my-12 mx-4 items-center justify-center">
                <div className="bg-red-400 w-64 h-64"></div>
            </div>
    </DigtLayout>
);

export default SingleDigt;

export const query = graphql`
    query($slug: String!){
        file(relativePath: {eq: $slug}) {
            childDigteJson {
                titel
                musiker
                digter
            }
        }
    }
`