import React from 'react';
import Digt from '../../components/digt';
import DigtLayout from '../../components/digtlayout';
import SEO from '../../components/seo';



const MitVarelse = () => (
    <DigtLayout bg="#574C4C">
            <SEO title="Mit værelse"></SEO>


            <Digt className="ml-24" digter="Sigrid Marie Eltved Krogsgård" musiker="Helene Aaboe" nolink>Mit værelse</Digt>

            <div className="flex my-12 mx-4 items-center justify-center">
                <div className="bg-red-400 w-64 h-64"></div>
            </div>
    </DigtLayout>
);

export default MitVarelse;