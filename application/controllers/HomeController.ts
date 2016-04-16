module Home {
    export class HomeController {
        private scope : IHomeScope;
        
        constructor($scope: IHomeScope) {
            this.scope = $scope;
            this.setGreeting();
        }

        public static $inject = [
            '$scope'
        ];
        
        private setGreeting = () => {
            this.scope.greeting = 'hello2';
        }
    }
}