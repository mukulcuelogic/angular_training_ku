angular.module('paginator.service',[])
.service('paginatorService',[ '$rootScope' , paginatorService]);

/*
 * handle pagination
 */
function paginatorService($rootScope) {

        
        this.page = 0;
        this.rowsPerPage = 50;
        this.itemCount = 0;
        this.displayPagesButton = 5;

        this.setPage = function (page) {
            if (page > this.pageCount()) {
                return;
            }

            this.page = page;
        };

        this.nextPage = function () {
            if (this.isLastPage()) {
                return;
            }

            this.page++;
        };

        this.perviousPage = function () {
            if (this.isFirstPage()) {
                return;
            }

            this.page--;
        };

        this.firstPage = function () {
            this.page = 0;
        };

        this.lastPage = function () {
            this.page = this.pageCount() - 1;
        };

        this.isFirstPage = function () {
            return this.page == 0;
        };

        this.isLastPage = function () {
            return this.page == this.pageCount() - 1;
        };

        this.pageCount = function () {
            return Math.ceil(parseInt(this.itemCount) / parseInt(this.rowsPerPage));
        };
        
        this.pageStartFrom = function() { 
            var pageDifference = this.pageCount() - this.displayPagesButton;
            
            if (pageDifference < 0) { 
                return 0; 
            }
            
            if (this.page > pageDifference + 1) { 
                return pageDifference; 
            } 
            
            var low = this.page - (Math.ceil(this.displayPagesButton/2) - 1); 
            
            return Math.max(low, 0);
        };
  
};