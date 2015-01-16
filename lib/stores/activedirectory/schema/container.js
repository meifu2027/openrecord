exports.store = {
  mixinCallback: function(){
    
    this.Model('Container', function(){
      this.isContainer('cn');
      this.objectClass = ['top', 'container'];
    
      this.attribute('name', String);
      this.attribute('description', String);
      this.attribute('objectGUID', 'guid');
      this.attribute('uSNChanged', Number);
      this.attribute('whenChanged', 'date');
      this.attribute('whenCreated', 'date');
      
      
      this.validatesPresenceOf('name');
      
      
      this.convertWrite('cn', function(cn){
        if(!cn) cn = this.name;
        return cn;
      });
    });
        
  }
}