import data from "@/public/data.json"

// get products function
export function getProducts() {
    return data
}

//get products' category function
export function getCategory(){
    return data
}

export default function handler(req: any, res: any){
    if(req.method !== 'GET'){
       res.setHeader('Allow', ['GET']);
       res.status(405).json({message: `Method ${req.method} is not allowed`}) 
    }else{
        const products = getProducts();
        const category = getCategory()
        res.status(200).json(products, category);

    }
}


