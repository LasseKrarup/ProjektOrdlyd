import React from 'react';
import Digt from '../../components/digt';
import DigtLayout from '../../components/digtlayout';
import SEO from '../../components/seo';



const Manedans = () => (
    <DigtLayout bg="#574C4C">
            <SEO title="mÅnEdAnS"></SEO>

            <Digt className="ml-12" digter="Mascha Mølkjær-Hansen" musiker="Jirasol Pereira" nolink>mÅnEdAnS</Digt>

            <div className="flex my-12 mx-4 items-center justify-center">
                <div className="bg-red-400 w-64 h-64"></div>
            </div>
    </DigtLayout>
);

export default Manedans;