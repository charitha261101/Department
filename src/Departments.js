import {Box,Typography,TextField,Button,Radio,FormControlLabel,Select,MenuItem} from "@mui/material";
import "./App.css"
function Department(){
    const dir={
        name:"Abcd efg"
    }
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="black"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <Typography variant="h5">Panoma Vol2</Typography>
            <Typography variant="body1">Director:{dir.name}</Typography>
            </Box>
        </div>
        </>
    )
}
export default Department;
export function Dep1(){
    const dep_data=[
        "loren Ipsum","gsdgsdgsdgb","tutukmbncx","qebngjkgm"
    ];
    return(
        <>
        <div className="g2">
            <Box 
            bgcolor="lightblue"
            color="black"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep1">
                <div className="b1">
                <Typography variant="body1">Assistant Directors</Typography>
                <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            <div className="b1">
            <Typography variant="body1">Music Directors</Typography>
            <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            <div className="b1">
            <Typography variant="body1">Costume Department</Typography>
            <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            </div>
            </Box>
        </div>
        </>
    )
}
export function Dep2(){
    const dep4_data=[{s_no:1.,dep:"loren Ipsum",},
    {s_no:2.,dep:"loren Ipsum",},
    {s_no:3.,dep:"loren Ipsum",}
];
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep2">
            <Typography variant="h5">Departments</Typography>
                <table >
                <thead>
                    <tr>
                        <th className="table-cell">S.NO</th>
                        <th className="table-cell">Department</th>
                    </tr>
                </thead>
                    <tbody>
                        {dep4_data.map((val,index)=>(
                            <>
                            <tr key={index}>
                            <td className="table-cell">{val.s_no}</td>
                            <td className="table-cell">{val.dep}</td>
                            <td className="table-cell">{<button className="b">Edit</button>}</td>
                            <td className="table-cell">{<button className="but">Details</button>}</td>
                            </tr>
                            </>
                        ))}
                </tbody>
                </table>
                </div>
            </Box>
        </div>
        </>
    )
}
export function Dep3(){
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep3">
            <Typography color="black">Add New Department</Typography>
            <TextField label="Name Department"></TextField>
            <form className="form">
            <FormControlLabel label="Main" value="Main" control={<Radio/>}/>
            <FormControlLabel label="sub" value="sub" control={<Radio/>}/>
            </form>
            <TextField label="Total members"></TextField>
            <Button variant="contained" color="primary">Add</Button>
            </div>
            </Box>
        </div>
        </>
    )
}
export function Dep4(){
    const dep4_data=[{s_no:1.,dep:"loren Ipsum",sub_dep:"loren ipsum"},
    {s_no:2.,dep:"loren Ipsum",sub_dep:"loren ipsum"},
    {s_no:3.,dep:"loren Ipsum",sub_dep:"loren ipsum"}
];
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep4">
            <Typography variant="h5">Sub-Departments</Typography>
                <table >
                <thead>
                    <tr>
                        <th className="table-cell">S.NO</th>
                        <th className="table-cell">Department</th>
                        <th className="table-cell">Sub-Department</th>
                    </tr>
                </thead>
                    <tbody>
                        {dep4_data.map((val,index)=>(
                            <>
                            <tr key={index}>
                            <td className="table-cell">{val.s_no}</td>
                            <td className="table-cell">{val.dep}</td>
                            <td className="table-cell">{val.sub_dep}</td>
                            <td className="table-cell"><button className="but">Edit</button></td>
                            <td className="table-cell"><button className="but">Details</button></td>
                            </tr>
                            </>
                        ))}
                </tbody>
                </table>
                </div>
            </Box>
        </div>
        </>
    )
}
export function Dep5(){
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep3">
            <Typography color="black">Add Sub-Department</Typography>
            <Select label="Select Department" value="">
            <MenuItem disabled value="">
              <em>Select Department</em>
            </MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            </Select>
            <TextField label="Name Department"></TextField>
            <TextField label="Total members"></TextField>
            <Button variant="contained" color="primary">Add</Button>
            </div>
            </Box>
        </div>
        </>
    )
}