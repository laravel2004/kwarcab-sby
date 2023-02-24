import Grid from "@/components/atoms/Grid";
import MainContainer from "@/components/atoms/MainContainer";
import { RootContext } from "@/service/reducer/Reducer";
import React from "react";
import { useContext } from "react";

const Hero = () => {

    const context = useContext(RootContext);
    console.log(context)


    return (
        <MainContainer>
            <Grid>
                <div>
                    dnajha
                </div>
                <div>
                    dabha   
                </div>
            </Grid>
        </MainContainer>
    )
}

export default Hero