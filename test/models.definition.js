module.exports = [
    {
        identity: 'bar',
        connection: 'my_foo',
        
        attributes: {
            foo: 'string'
        }
    },
    
    function(waterline) { // Can pass waterline to model definition
        return {
            identity: 'zoo',
            connection: 'my_foo',
            
            attributes: {
                ding: 'float'
            }
        }
    },
    
    {
        identity: 'doe',
        connection: 'my_foo',
        
        attributes: {
            don: 'string',
            moe: 'string',
            donMoe: function() { return this.don + this.moe }
        }
    }
];