const Calculation=(data)=>{

    console.log(data)
    console.log(data.username,data.password)
    let n=Number(data.username);
    let myarr=data.password

    console.log(myarr,n);
    console.log(myarr)
    myarr=myarr.split(",")
    console.log(myarr)
    if(n<=1){
        return 0;
    }
    if(Number(myarr[0])==0){
        return -1;
    }
    let maxreach=Number(myarr[0]);
    let steps=Number(myarr[0]);
    let jumps = 1;
    for(let i=1;i<n;i++){
        if(i===n-1){
            return jumps;
        }
        maxreach=Math.max(maxreach,i+Number(myarr[i]))
        steps=steps-1
        if(steps===0){
            jumps++;
            console.log(jumps)
            if(i>=maxreach){
                return -1
            }
            steps=maxreach-i;
        }
    }
    return -1;


    
}
export default Calculation;