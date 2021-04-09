import React from 'react';
import Digt from '../../components/digt';
import DigtLayout from '../../components/digtlayout';
import SEO from '../../components/seo';



const JegErBegyndtAtStrikke = () => (
    <DigtLayout bg="#574C4C">
        <SEO title="Jeg er begyndt at strikke"></SEO>

        <Digt className="ml-8" digter="Theodor Stoffer" musiker="Lasse Hansen">Jeg er begyndt at strikke</Digt>

        <div className="flex my-12 mx-4 items-center justify-center">
            <div className="bg-red-400 w-64 h-64"></div>
        </div>
    </DigtLayout>
);

export default JegErBegyndtAtStrikke;