const productModal = require('../modal/productModal')
const productController = {
    getall: async (req, res) => {
        try {
            let data = await productModal.find()
            res.status(200).json({message:'sucsess',data})
        } catch (error) {
            res.status(500).json(error);

        }
    },
    addproduct : async (req,res) =>{
        try {
            console.log(req.body)
            let add = await productModal.create({
                name: req.body.name
            })
            let data = await productModal.find()
            res.status(200).json({message:'sucsess',data})
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteproduct : async (req,res) =>{
        try {
            let dele = await productModal.deleteMany({_id:req.params.id})
            let data = await productModal.find()
            res.status(200).json({message:'sucsess',data})
        } catch (error) {   
            res.status(500).json(error);
        }
    },
    updateproduct: async (req,res)=>{
        try {
            const name = req.body.name
            const update = await productModal.updateOne({_id:req.params.id},{
                name 
            })
            let data = await productModal.find()
            res.status(200).json({message:'sucsess',data})
        } catch (error) {
            res.status(500).json(error);
        }
    },
    searchproduct : async (req,res)=>{
        try {
            console.log(123)
            let data = await productModal.find()
            var title = req.query.searchbyname;
            var dataa = data.filter(function(item){
                return item.name.toLowerCase().indexOf(title.toLowerCase()) !== -1
            });
            res.status(200).json(dataa)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = productController