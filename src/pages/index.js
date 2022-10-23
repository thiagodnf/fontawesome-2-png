import { SketchPicker } from "react-color";
import $ from "jquery";

import FileUtils from "../utils/FileUtils";

function IndexPage({ icons }) {

    function handleChangeComplete(color) {
        $("#selectedIcon svg").css("fill", color.hex);
    };

    let iconsAsImg = icons.map((el, i) => {
        return <img className='mx-2 mb-2 icons' key={i} src={el.replace("/", "")} width="32px" />;
    });

    return (
        <div className='row' >
            <div className='col panels'>
                <div className="mb-3">
                    <input type="search" className="form-control" placeholder="Search the icons" autoComplete="off" />
                </div>
                <div className='text-center panel-icons border pt-2'>
                    {iconsAsImg}
                </div>
            </div>
            <div className='col panels chess-pattern' id="selectedIcon">
            </div>
            <div className='col panels'>
                <SketchPicker
                    onChangeComplete={handleChangeComplete}
                />
                <button id="download" className='btn btn-primary mt-3'>Download</button>
            </div>
        </div>
    );
}

export async function getStaticProps() {

    return {
        props: {
            icons: await FileUtils.getIconPaths()
        },
    };
}

export default IndexPage;
