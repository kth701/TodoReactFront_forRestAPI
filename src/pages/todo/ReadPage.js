import { useCallback } from "react"
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom"

const ReadPage = () => {
    const {tno} = useParams()
    // console.log('userParms:', tno)

    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    
    const page = queryParams.get("page")?parseInt(queryParams.get("page")): 1
    const size = queryParams.get("size")?parseInt(queryParams.get("size")): 10
    const queryStr = createSearchParams( {page, size}).toString()

    const moveToModify = useCallback((tno)=>{ 
        console.log('tno:',tno)
        navigate({
            pathname:`/todo/modify/${tno}`, 
            search:queryStr
        })
    }, [tno, page, size])

    const moveToList =  useCallback(()=>{
        navigate({
            pathname:`/todo/list`, 
            search: queryStr
        })
    },[page, size])


    return (<>
        <div className="text-3xl font-extrabold ">
            Todo Read Page Component :tno 파라미터={tno}

            <div>
                [<button onClick={()=>moveToModify(tno)}>Test Modify Button</button>]
                [<button onClick={()=>moveToList()}>Test List Button</button>]
            </div>
        </div>
    </>)
}

export default ReadPage