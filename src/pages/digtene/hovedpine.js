import React from 'react';
import Digt from '../../components/digt';
import DigtLayout from '../../components/digtlayout';
import SEO from '../../components/seo';



const Hovedpine = () => (
    <DigtLayout bg="#574C4C">
            <SEO title="Hovedpine"></SEO>


            <Digt className="self-end mr-4" digter="Rakel Fomsgaard Kragh" musiker="Casper Brændstrup" nolink>Hovedpine</Digt>
            
            <div className="flex my-12 mx-4 items-center justify-center">
                <div className="bg-red-400 w-64 h-64"></div>
            </div>
    </DigtLayout>
);

export default Hovedpine;