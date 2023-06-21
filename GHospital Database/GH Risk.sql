USE [GHospital]
GO
create procedure Insert_RiskFactors
			(@patient_id varchar(50)
           ,@respiratory_disease int
           ,@neurological_disease int
           ,@newly_tb int
           ,@prior_tb int
           ,@hiv_aids int
           ,@heart_disease int
           ,@malnutrition int
           ,@liver_disease int
           ,@renal_disease int
           ,@diabetes int
           ,@asthma int
           ,@cancer int
           ,@sickle_cell int
           ,@rickets int
           ,@createdby char(50)
           ,@datecreated datetime)
		   as
INSERT INTO [dbo].[RiskFactors]
           ([patient_id]
           ,[respiratory_disease]
           ,[neurological_disease]
           ,[newly_tb]
           ,[prior_tb]
           ,[hiv_aids]
           ,[heart_disease]
           ,[malnutrition]
           ,[liver_disease]
           ,[renal_disease]
           ,[diabetes]
           ,[asthma]
           ,[cancer]
           ,[sickle_cell]
           ,[rickets]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id 
           ,@respiratory_disease 
           ,@neurological_disease 
           ,@newly_tb 
           ,@prior_tb 
           ,@hiv_aids 
           ,@heart_disease 
           ,@malnutrition
           ,@liver_disease 
           ,@renal_disease 
           ,@diabetes 
           ,@asthma 
           ,@cancer 
           ,@sickle_cell 
           ,@rickets 
           ,@createdby 
           ,@datecreated)
GO


