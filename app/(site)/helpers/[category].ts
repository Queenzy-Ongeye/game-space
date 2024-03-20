import data from "@/public/data.json"

// get products by category function
export function getProductsByCategory(category: any) {
    const products = data.filter((product) => product.category === category)
    return products
}


export default function handler(req: any, res: any){
    if(req.method !== 'GET'){
       res.setHeader('Allow', ['GET']);
       res.status(405).json({message: `Method ${req.method} is not allowed`}) 
    }else{
        const products = getProductsByCategory(req.query.category);
        res.status(200).json(products);

    }
}


